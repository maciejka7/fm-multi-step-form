import { ReactNode } from 'react';
import s from './Card.module.scss'

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  icon?: ReactNode
}

export function Card({ children, title, description, icon }: CardProps) {
  return (
    <section className={s.container}>
      {icon && <div className={s.icon}>{icon}</div>}
      {title && <h1 className={s.title}>{title}</h1>}
      {description && <p className={s.description}>{description}</p>}
      {children}
    </section>
  );


  
}
