import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  DetailAccordionButton,
  DetailAccordionItemPanel,
  DetailAccordionSection,
  DetailAccordionWrapper,
} from "./faqDetailStyle";

function FaqDetailAccordion() {
  const accordionButton = {
    display: "flex",
    backgroundColor: "#fff",
    width: "auto",
    padding: "30px 18px",
    lineHeight: "22px",
  };

  return (
    <>
      <DetailAccordionWrapper>
        <DetailAccordionSection>
          <Accordion allowZeroExpanded={true}>
            <div>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p> What is mental illnes</p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p>
                        Will I be allowed to have visitors during my treatment?
                      </p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p> What happens if I am admitted?</p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p> Do I need to bring my documents or records?</p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p> So how do we start the process?</p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p> Can I pay online for my reservation?</p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={accordionButton}>
                    <DetailAccordionButton>
                      <p>
                        How much experience does your healthcare facilities have
                        treating international patients?
                      </p>
                    </DetailAccordionButton>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <DetailAccordionItemPanel>
                  <p>
                    If something feels wrong or off, think about your thoughts,
                    feelings, and behaviors. The first questions we normally ask
                    when we struggle with a mental illness are:
                  </p>
                  <ul>
                    <li>
                      Have things changed with your mind and you don’t feel as
                      well as you used to?
                    </li>
                    <li>Do things not feel like “your normal”?</li>
                    <li>
                      Are there thoughts or feelings that overwhelm you that you
                      don’t want to feel anymore?
                    </li>
                    <li>
                      Do other people not seem to be bothered in the same way
                      you are?
                    </li>
                    <li>
                      Is this (thought, behavior, experience, etc.) normal or
                      not normal?
                    </li>
                  </ul>
                  <p>
                    It’s also a good idea to learn about different mental
                    illnesses. This can help you figure out if your experiences
                    are like the symptoms of mental illnesses. For example, you
                    may want to know if you’re depressed or just sad. Or if
                    you’re stressed or if you have anxiety. You can use Google,
                    social media, and even this website to learn about mental
                    illness and listen to others’ stories.
                  </p>
                </DetailAccordionItemPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </DetailAccordionSection>
      </DetailAccordionWrapper>
    </>
  );
}

export default FaqDetailAccordion;
