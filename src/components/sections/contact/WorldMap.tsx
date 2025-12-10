'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps';

// World map GeoJSON URL
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// India coordinates (origin)
const INDIA: [number, number] = [78.9629, 20.5937];

// Export destination countries with coordinates
const destinations = [
  { name: 'USA', coordinates: [-95.7129, 37.0902] as [number, number] },
  { name: 'Germany', coordinates: [10.4515, 51.1657] as [number, number] },
  { name: 'UK', coordinates: [-3.436, 55.3781] as [number, number] },
  { name: 'France', coordinates: [2.2137, 46.6034] as [number, number] },
  { name: 'Netherlands', coordinates: [5.2913, 52.1326] as [number, number] },
  { name: 'Brazil', coordinates: [-51.9253, -14.235] as [number, number] },
  { name: 'Mexico', coordinates: [-102.5528, 23.6345] as [number, number] },
  { name: 'Nepal', coordinates: [84.124, 28.3949] as [number, number] },
  { name: 'Sri Lanka', coordinates: [80.7718, 7.8731] as [number, number] },
];

export default function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="relative bg-navy-900 rounded-2xl overflow-hidden p-4 md:p-8">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [40, 30],
        }}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        {/* World Map */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#243b53"
                stroke="#334e68"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: '#334e68' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Export Route Lines */}
        {destinations.map((dest) => (
          <motion.g key={dest.name}>
            <Line
              from={INDIA}
              to={dest.coordinates}
              stroke="#d4af37"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeOpacity={hoveredCountry === dest.name ? 1 : 0.4}
              strokeDasharray="4 4"
            />
          </motion.g>
        ))}

        {/* India Marker (Origin) */}
        <Marker coordinates={INDIA}>
          <motion.circle
            r={8}
            fill="#d4af37"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
          <motion.circle
            r={15}
            fill="#d4af37"
            opacity={0.3}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ delay: 0.8, duration: 2, repeat: Infinity }}
          />
          <text
            y={-20}
            textAnchor="middle"
            fill="#fff"
            fontSize={12}
            fontWeight="bold"
          >
            INDIA
          </text>
        </Marker>

        {/* Destination Markers */}
        {destinations.map((dest, index) => (
          <Marker
            key={dest.name}
            coordinates={dest.coordinates}
            onMouseEnter={() => setHoveredCountry(dest.name)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <motion.circle
              r={hoveredCountry === dest.name ? 8 : 5}
              fill={hoveredCountry === dest.name ? '#d4af37' : '#627d98'}
              stroke="#fff"
              strokeWidth={1.5}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              style={{ cursor: 'pointer' }}
            />
            {hoveredCountry === dest.name && (
              <motion.text
                y={-15}
                textAnchor="middle"
                fill="#fff"
                fontSize={11}
                fontWeight="500"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                {dest.name}
              </motion.text>
            )}
          </Marker>
        ))}
      </ComposableMap>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-navy-800/80 backdrop-blur-sm rounded-lg p-3 text-xs text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-gold-500" />
          <span>Origin: India</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500" />
          <span>Export Destinations</span>
        </div>
      </div>
    </div>
  );
}
