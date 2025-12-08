'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
  chart: string;
  id?: string;
}

export default function MermaidChart({ chart, id }: MermaidChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    });

    if (chartRef.current) {
      chartRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div 
      ref={chartRef} 
      className="mermaid flex justify-center items-center p-4"
      id={chartId}
    />
  );
}
