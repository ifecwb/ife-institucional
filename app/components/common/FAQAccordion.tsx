'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

/**
 * Componente FAQ Accordion reutilizável
 */
export default function FAQAccordion({ items }: Readonly<FAQAccordionProps>) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {items.map((item, index) => {
        const panelId = item.id || `panel${index}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
          sx={{
            mb: 2,
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panelId}-content`}
            id={`${panelId}-header`}
            sx={{
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.7,
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
        );
      })}
    </>
  );
}
