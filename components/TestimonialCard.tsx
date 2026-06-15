import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export function TestimonialCard({ quote, name, location, rating }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-coffee/10 bg-white p-7 shadow-luxury">
      <div className="flex gap-1 text-gold" aria-label={`${rating} star review`}>
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={16} className="fill-gold" />
        ))}
      </div>
      <p className="mt-6 text-base leading-8 text-espresso/75">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-ink">{name}</p>
        <p className="mt-1 text-sm text-espresso/55">{location}</p>
      </div>
    </article>
  );
}
