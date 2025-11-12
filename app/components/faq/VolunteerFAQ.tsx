'use client'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function VolunteerFAQ() {
  const faqs = [
    {
      question: 'Quem pode ser voluntário?',
      answer:
        'Qualquer pessoa maior de 18 anos que tenha disponibilidade, comprometimento e vontade de ajudar pode ser voluntário do IFE. Não é necessário ter experiência prévia, apenas disposição para aprender e contribuir.',
    },
    {
      question: 'Quanto tempo preciso dedicar como voluntário?',
      answer:
        'O tempo de dedicação varia conforme a atividade escolhida. Temos oportunidades que vão desde algumas horas por semana até projetos mais intensivos. Durante o processo de seleção, conversamos sobre sua disponibilidade e encontramos a melhor forma de participação.',
    },
    {
      question: 'Preciso ter alguma formação específica?',
      answer:
        'Não necessariamente. Temos atividades que exigem conhecimentos específicos (como aulas de reforço, oficinas profissionalizantes) e outras que não requerem formação especial. O importante é ter vontade de contribuir e se comprometer com a causa.',
    },
    {
      question: 'Como funciona o processo de seleção?',
      answer:
        'Após preencher o formulário de interesse, nossa equipe entrará em contato para uma conversa inicial. Fazemos uma entrevista para conhecer melhor você, suas habilidades e disponibilidade. Em seguida, você participará de uma capacitação antes de iniciar as atividades.',
    },
    {
      question: 'Posso escolher em qual projeto atuar?',
      answer:
        'Sim! Durante o processo de seleção, apresentamos nossos projetos e atividades. Consideramos suas habilidades, interesses e disponibilidade para encontrar a melhor área de atuação para você.',
    },
    {
      question: 'O voluntariado é presencial ou pode ser remoto?',
      answer:
        'Temos oportunidades presenciais e remotas. Atividades educacionais e de convivência geralmente são presenciais, enquanto áreas como marketing digital, design, captação de recursos e gestão podem ser realizadas remotamente.',
    },
    {
      question: 'Recebo algum tipo de remuneração?',
      answer:
        'O trabalho voluntário não é remunerado, conforme a Lei do Voluntariado (Lei 9.608/98). No entanto, oferecemos certificado de horas, capacitações, networking e a gratificante experiência de contribuir para transformação social.',
    },
    {
      question: 'Por quanto tempo preciso me comprometer?',
      answer:
        'Sugerimos um compromisso mínimo de 6 meses para que você possa desenvolver um trabalho significativo e criar vínculo com os atendidos. Porém, entendemos que imprevistos acontecem e você pode conversar com a coordenação caso precise ajustar.',
    },
    {
      question: 'Vou receber capacitação?',
      answer:
        'Sim! Todos os voluntários passam por uma capacitação inicial sobre o IFE, nossos valores, público atendido e metodologias. Também oferecemos formações continuadas ao longo do ano sobre diversos temas relacionados às atividades.',
    },
    {
      question: 'Como é o ambiente de trabalho?',
      answer:
        'Temos um ambiente acolhedor, colaborativo e respeitoso. Valorizamos a diversidade, o trabalho em equipe e o desenvolvimento de cada voluntário. Nossa equipe está sempre disponível para apoiar e orientar.',
    },
    {
      question: 'Posso ser voluntário mesmo trabalhando em tempo integral?',
      answer:
        'Sim! Muitos de nossos voluntários trabalham em tempo integral. Temos atividades em diferentes horários, incluindo finais de semana e noites. Buscamos adequar as oportunidades à sua disponibilidade.',
    },
    {
      question: 'O que acontece se eu precisar me afastar temporariamente?',
      answer:
        'Entendemos que imprevistos acontecem. Pedimos que comunique a coordenação com antecedência. Você pode se afastar temporariamente e retornar quando possível, desde que mantenha a comunicação com a equipe.',
    },
  ]

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          mb: 3,
        }}
      >
        Voluntariado
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 1,
            '&:before': {
              display: 'none',
            },
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'divider',
            '&:first-of-type': {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
            '&:last-of-type': {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`volunteer-faq-${index}-content`}
            id={`volunteer-faq-${index}-header`}
            sx={{
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <Typography variant="body1" fontWeight={500}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
