"use client";

import React, { useState, useRef } from "react";
import { SqlSchema, SqlTable } from "@/data/sql/types";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Database, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SqlSchemaDiagramProps {
  schema: SqlSchema;
}

const HEADER_HEIGHT = 28;
const ROW_HEIGHT = 24;

export function SqlSchemaDiagram({ schema }: SqlSchemaDiagramProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  // Zoom controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.65));
  const handleReset = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
  };

  const handleFit = () => {
    if (!viewportRef.current) return;
    const containerWidth = viewportRef.current.clientWidth - 32;
    const scale = Math.min(containerWidth / schema.canvasWidth, 1);
    setZoomLevel(Math.max(scale, 0.65));
    setPan({ x: 0, y: 0 });
  };

  // Drag / Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPan({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Map for fast table lookup
  const tableMap = new Map<string, SqlTable>();
  schema.tables.forEach((t) => tableMap.set(t.id, t));

  // Calculate connector lines coordinate endpoints
  const connectionPaths = schema.connections.map((conn) => {
    const fromTable = tableMap.get(conn.fromTable);
    const toTable = tableMap.get(conn.toTable);

    if (!fromTable || !toTable) return null;

    const fromColIdx = fromTable.columns.findIndex((c) => c.name === conn.fromColumn);
    const toColIdx = toTable.columns.findIndex((c) => c.name === conn.toColumn);

    const fromColY =
      fromTable.y + HEADER_HEIGHT + (fromColIdx >= 0 ? fromColIdx : 0) * ROW_HEIGHT + ROW_HEIGHT / 2;
    const toColY =
      toTable.y + HEADER_HEIGHT + (toColIdx >= 0 ? toColIdx : 0) * ROW_HEIGHT + ROW_HEIGHT / 2;

    const fromWidth = fromTable.width || 230;
    const toWidth = toTable.width || 230;

    // Determine connection anchor sides (default right -> left or based on position)
    const fromIsRight = fromTable.x < toTable.x;
    const fromX = fromIsRight ? fromTable.x + fromWidth : fromTable.x;
    const toX = fromIsRight ? toTable.x : toTable.x + toWidth;

    // Smooth cubic Bezier curve control points
    const dx = Math.max(50, Math.abs(toX - fromX) * 0.45);
    const cp1x = fromIsRight ? fromX + dx : fromX - dx;
    const cp1y = fromColY;
    const cp2x = fromIsRight ? toX - dx : toX + dx;
    const cp2y = toColY;

    const pathD = `M ${fromX} ${fromColY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toX} ${toColY}`;

    // Midpoint for relationship label
    const midX = (fromX + toX) / 2;
    const midY = (fromColY + toColY) / 2;

    return {
      id: conn.id,
      pathD,
      label: conn.label,
      fromX,
      fromY: fromColY,
      toX,
      toY: toColY,
      midX,
      midY,
    };
  });

  return (
    <div className="rounded-2xl border border-slate-300/80 bg-white shadow-xs overflow-hidden">
      {/* Top Diagram Header & Compact Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-2.5 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            Database Schema Diagram
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {schema.tables.length} Tables
          </span>
        </div>

        {/* Zoom & Canvas Controls */}
        <div className="flex items-center gap-1 bg-slate-800/90 rounded-lg p-0.5 border border-slate-700">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            aria-label="Zoom Out"
            title="Zoom Out"
            className="h-7 w-7 p-0 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>

          <span className="text-[11px] font-mono px-1.5 text-slate-300 select-none">
            {Math.round(zoomLevel * 100)}%
          </span>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            aria-label="Zoom In"
            title="Zoom In"
            className="h-7 w-7 p-0 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>

          <div className="h-3.5 w-px bg-slate-700 mx-0.5" />

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleFit}
            aria-label="Fit Diagram to View"
            title="Fit Schema to View"
            className="h-7 px-2 text-[11px] font-semibold text-slate-300 hover:text-white hover:bg-slate-700 rounded-md flex items-center gap-1"
          >
            <Maximize2 className="h-3 w-3" />
            Fit
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleReset}
            aria-label="Reset Diagram"
            title="Reset Diagram"
            className="h-7 px-2 text-[11px] font-semibold text-amber-300 hover:text-amber-200 hover:bg-slate-700 rounded-md flex items-center gap-1"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </Button>
        </div>
      </div>

      {/* 
        SCHEMA VIEWPORT CONTAINER
        Has dedicated horizontal & vertical scrollbars.
        Does NOT cause whole-page scrolling.
      */}
      <div
        ref={viewportRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative w-full h-[380px] sm:h-[430px] bg-[#0b1329] overflow-auto select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#475569 #0f172a",
        }}
      >
        {/* Subtle Background Canvas Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            minWidth: `${schema.canvasWidth * zoomLevel + 100}px`,
            minHeight: `${schema.canvasHeight * zoomLevel + 100}px`,
          }}
        />

        {/* Scalable & Pannable Unified 2D Diagram Canvas */}
        <div
          className="relative transition-transform duration-75 origin-top-left"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
            width: `${schema.canvasWidth}px`,
            height: `${schema.canvasHeight}px`,
            minWidth: `${schema.canvasWidth}px`,
            minHeight: `${schema.canvasHeight}px`,
          }}
        >
          {/* SVG Connection Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            width={schema.canvasWidth}
            height={schema.canvasHeight}
          >
            <defs>
              {/* Endpoint Arrow Marker */}
              <marker
                id="conn-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>

              {/* Socket Dot Marker */}
              <marker
                id="conn-circle"
                viewBox="0 0 8 8"
                refX="4"
                refY="4"
                markerWidth="5"
                markerHeight="5"
              >
                <circle cx="4" cy="4" r="3" fill="#f59e0b" stroke="#0b1329" strokeWidth="1" />
              </marker>
            </defs>

            {/* Connection Lines */}
            {connectionPaths.map((conn) => {
              if (!conn) return null;

              return (
                <g key={conn.id}>
                  {/* Subtle Glow Background Line */}
                  <path
                    d={conn.pathD}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                    strokeOpacity="0.2"
                    strokeLinecap="round"
                  />

                  {/* Main Connector Path */}
                  <path
                    d={conn.pathD}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    markerStart="url(#conn-circle)"
                    markerEnd="url(#conn-arrow)"
                  />

                  {/* Relationship / FK Label along the path */}
                  {conn.label && (
                    <g transform={`translate(${conn.midX}, ${conn.midY})`}>
                      <rect
                        x={-(conn.label.length * 3.4 + 7)}
                        y="-8"
                        width={conn.label.length * 6.8 + 14}
                        height="16"
                        rx="4"
                        fill="#0f172a"
                        stroke="#38bdf8"
                        strokeWidth="0.8"
                        strokeOpacity="0.8"
                        className="shadow-xs"
                      />
                      <text
                        x="0"
                        y="3"
                        textAnchor="middle"
                        fill="#7dd3fc"
                        fontSize="9.5"
                        fontFamily="monospace"
                        fontWeight="600"
                      >
                        {conn.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Table Boxes Layer (Explicit 2D coordinates) */}
          {schema.tables.map((table) => {
            const tableWidth = table.width || 230;

            return (
              <div
                key={table.id}
                className="absolute rounded-lg overflow-hidden border border-slate-700/90 bg-[#0f172a] shadow-lg z-20"
                style={{
                  left: `${table.x}px`,
                  top: `${table.y}px`,
                  width: `${tableWidth}px`,
                }}
              >
                {/* Table Header (Distinct CTS/Accenture reddish-pink header) */}
                <div className="h-[28px] px-3 bg-gradient-to-r from-[#831843] via-[#9d174d] to-[#be185d] border-b border-rose-950 flex items-center justify-between text-white select-none">
                  <span className="font-bold text-[12px] font-mono tracking-tight truncate">
                    {table.name}
                  </span>
                  <span className="text-[9px] font-semibold text-rose-200/90 uppercase tracking-wider px-1 py-0.2 rounded bg-black/30 border border-rose-300/20">
                    [table]
                  </span>
                </div>

                {/* Columns List */}
                <div className="divide-y divide-slate-800/80 text-[11px] font-mono bg-slate-950/90">
                  {table.columns.map((col, idx) => (
                    <div
                      key={idx}
                      className={`h-[24px] px-2.5 flex items-center justify-between gap-2 transition-colors ${
                        col.isPrimaryKey
                          ? "bg-amber-500/10 text-amber-200 font-semibold"
                          : col.isForeignKey
                          ? "bg-sky-500/5 text-sky-200"
                          : "text-slate-300"
                      }`}
                    >
                      {/* Left: Key indicator & Column Name */}
                      <div className="flex items-center gap-1.5 truncate">
                        {col.isPrimaryKey ? (
                          <span
                            title="Primary Key"
                            className="flex h-3.5 w-3.5 items-center justify-center rounded bg-amber-400/25 text-amber-400 text-[8px] font-bold shrink-0"
                          >
                            <Key className="h-2 w-2" />
                          </span>
                        ) : col.isForeignKey ? (
                          <span
                            title="Foreign Key"
                            className="flex h-3.5 w-3.5 items-center justify-center rounded bg-sky-400/25 text-sky-400 text-[8px] font-bold shrink-0"
                          >
                            FK
                          </span>
                        ) : (
                          <span className="w-3.5 shrink-0" />
                        )}

                        <span className="truncate text-[11px]">
                          {col.name}
                        </span>
                      </div>

                      {/* Right: Data Type */}
                      <span className="text-[10px] text-slate-400 uppercase tracking-tight shrink-0 font-normal">
                        {col.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
