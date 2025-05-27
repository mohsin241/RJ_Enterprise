import { Link } from 'wouter';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-primary hover:text-primary-light transition-colors">
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-neutral-400">/</span>
            {index === items.length - 1 || !item.href ? (
              <span className="text-neutral-600" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-primary hover:text-primary-light transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
