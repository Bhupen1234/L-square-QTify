import * as React from 'react';
import styles from "./BasicAccordion.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion({faqQuestions}) {
  return (
    <div>
    {faqQuestions.map((ele,index)=>{
      return  (
      <div>
        <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{ele.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {ele.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        )
    })}
    
      
      
      
    </div>
  );
}