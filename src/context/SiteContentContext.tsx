"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { SITE_CONTENT_DEFAULTS } from '@/lib/siteContentDefaults';

export interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
  isLocked?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientName: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
  isLocked?: boolean;
}

interface SiteContentContextType {
  getContent: (section: string, key: string) => string;
  allContent: Record<string, Record<string, string>>;
  brands: BrandItem[];
  portfolio: PortfolioItem[];
  isLivePreview: boolean;
}

const SiteContentContext = createContext<SiteContentContextType>({
  getContent: (section, key) => SITE_CONTENT_DEFAULTS[section]?.[key] ?? '',
  allContent: SITE_CONTENT_DEFAULTS,
  brands: [],
  portfolio: [],
  isLivePreview: false,
});

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allContent, setAllContent] = useState<Record<string, Record<string, string>>>(SITE_CONTENT_DEFAULTS);
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [isLivePreview, setIsLivePreview] = useState(false);

  // Initial fetch from API routes
  useEffect(() => {
    async function loadData() {
      try {
        const [contentRes, brandsRes, portRes] = await Promise.all([
          fetch('/api/site-content'),
          fetch('/api/brands'),
          fetch('/api/portfolio'),
        ]);

        const [contentJson, brandsJson, portJson] = await Promise.all([
          contentRes.json(),
          brandsRes.json(),
          portRes.json(),
        ]);

        if (contentJson?.data) {
          setAllContent((prev) => ({ ...prev, ...contentJson.data }));
        }
        if (brandsJson?.data) {
          setBrands(brandsJson.data);
        }
        if (portJson?.data) {
          setPortfolio(portJson.data);
        }
      } catch (e) {
        console.error('Error fetching site content context:', e);
      }
    }

    loadData();

    // Check if in preview mode via URL query parameter or iframe
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('preview') === 'true' || window.self !== window.top) {
        setIsLivePreview(true);
      }
    }
  }, []);

  // Listen to postMessage from parent editor window
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'FAMEBROS_LIVE_UPDATE') {
        if (data.allContent) {
          setAllContent(data.allContent);
        }
        if (data.brands) {
          setBrands(data.brands);
        }
        if (data.portfolio) {
          setPortfolio(data.portfolio);
        }
      }

      if (data.type === 'FAMEBROS_SCROLL_TO_SECTION' && data.sectionId) {
        const el = document.getElementById(data.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const getContent = useCallback(
    (section: string, key: string): string => {
      return (
        allContent[section]?.[key] ??
        SITE_CONTENT_DEFAULTS[section]?.[key] ??
        ''
      );
    },
    [allContent]
  );

  return (
    <SiteContentContext.Provider
      value={{ getContent, allContent, brands, portfolio, isLivePreview }}
    >
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => useContext(SiteContentContext);
