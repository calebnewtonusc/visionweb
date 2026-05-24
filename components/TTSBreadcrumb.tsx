import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function TTSBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center justify-center gap-1.5 mb-5">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <span className="text-gray-300 text-xs select-none">/</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-xs text-gray-400 no-underline hover:text-gray-700 transition-colors duration-150"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-xs text-gray-700 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
