'use client';

import React from 'react';
import styles from './styles/ExampleCard.module.scss';

interface ExampleCardProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'dark' | 'light';
  features?: string[];
}

/**
 * ExampleCard - Componente de exemplo usando SCSS Modules
 * 
 * Este componente demonstra o uso de SCSS com Next.js:
 * - CSS Modules (*.module.scss)
 * - Nesting de seletores
 * - Variáveis e mixins (podem ser adicionados)
 * - BEM naming convention
 * - Media queries
 * - Hover effects e transições
 * 
 * @example
 * ```tsx
 * <ExampleCard 
 *   title="Meu Card"
 *   description="Descrição do card"
 *   variant="dark"
 *   features={['Feature 1', 'Feature 2']}
 * />
 * ```
 */
export default function ExampleCard({
  title = 'Componente com SCSS',
  description = 'Este é um exemplo de componente React usando SCSS Modules no Next.js.',
  variant = 'default',
  features = [
    'Suporte completo a SCSS',
    'CSS Modules por padrão',
    'Nesting e variáveis',
    'Media queries responsivas',
  ],
}: ExampleCardProps) {
  const cardClass = variant === 'default' 
    ? styles['example-card']
    : `${styles['example-card']} ${styles[`example-card--${variant}`]}`;

  return (
    <div className={cardClass}>
      <h2 className={styles['example-card__title']}>
        {title.split(' ')[0]}{' '}
        <span className={styles['example-card__title--highlight']}>
          {title.split(' ').slice(1).join(' ')}
        </span>
      </h2>

      <p className={styles['example-card__description']}>
        {description}
      </p>

      <div className={styles['example-card__badge']}>
        Next.js + SCSS
      </div>

      <ul className={styles['example-card__list']}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button 
        className={styles['example-card__button']}
        onClick={() => alert('Botão clicado! Este componente usa SCSS Modules.')}
      >
        Ver Documentação
      </button>
    </div>
  );
}
