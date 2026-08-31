import os
import cv2

# Define target video directories inside the public directory
base_dir = r"d:\freelance\FAMEBROS-STUDIO\public"
videos_dir = os.path.join(base_dir, "vedios")

def extract_frame(video_path, output_image_path):
    """
    Extracts a frame from a video at around the 1.5 second mark (or first available frame)
    and saves it as a high-quality JPG poster thumbnail.
    """
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error opening video: {video_path}")
        return False
        
    fps = cap.get(cv2.CAP_PROP_FPS)
    if fps <= 0:
        fps = 30 # Default fallback
        
    # We want to extract at around 1.5 seconds mark (frame index 1.5 * fps)
    target_frame = int(1.5 * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
    
    ret, frame = cap.read()
    if not ret:
        # Fallback to the first frame if set failed or frame is out of bounds
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
        ret, frame = cap.read()
        
    if ret:
        # Save image frame
        cv2.imwrite(output_image_path, frame, [int(cv2.IMWRITE_JPEG_QUALITY), 92])
        cap.release()
        return True
    else:
        print(f"Failed to extract frame from: {video_path}")
        cap.release()
        return False

def process_directories():
    print("Scanning video directories for frame extraction...")
    supported_extensions = (".mp4", ".mov", ".mkv", ".webm")
    
    extracted_count = 0
    for root, dirs, files in os.walk(videos_dir):
        for file in files:
            if file.lower().endswith(supported_extensions):
                video_path = os.path.join(root, file)
                # Create corresponding thumbnail file path
                thumbnail_name = os.path.splitext(file)[0] + "_poster.jpg"
                output_image_path = os.path.join(root, thumbnail_name)
                
                # Perform frame extraction
                print(f"Processing: {os.path.relpath(video_path, base_dir)}")
                success = extract_frame(video_path, output_image_path)
                if success:
                    extracted_count += 1
                    
    print(f"\nDone! Successfully extracted {extracted_count} poster thumbnail frames.")

if __name__ == "__main__":
    process_directories()
