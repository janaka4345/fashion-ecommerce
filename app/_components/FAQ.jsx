import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function FAQ() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16">
          <Accordion
            type="multiple"
            collapsible="true"
            className="mx-auto mt-10 w-full"
          >
            {data1.map((item, i) => (
              <AccordionItem key={item.id} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion
            type="multiple"
            collapsible="true"
            className="mx-auto mt-10 w-full"
          >
            {data2.map((item, i) => (
              <AccordionItem key={item.id} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            type="multiple"
            collapsible="true"
            className="mx-auto mt-10 w-full"
          >
            {data3.map((item, i) => (
              <AccordionItem key={item.id} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const data1 = [
  {
    id: 1,
    question: 'What do you mean by "Figma assets"?',
    answer:
      "You will have access to download the full Figma project    including all of the pages, the components, responsive pages,    and also the icons, illustrations, and images included in the    screens.",
  },
  {
    id: 2,
    question: 'What does "lifetime access" exactly mean?',
    answer:
      " Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.",
  },
  {
    id: 3,
    question: "How does support work?",
    answer:
      "We're aware of the importance of well qualified support, that is    why we decided that support will only be provided by the authors    that actually worked on this project.",
  },
  {
    id: 4,
    question: 'What does "lifetime access" exactly mean?',
    answer:
      " Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.",
  },
];

const data2 = [
  {
    id: 5,
    question: " I want to build more than one project. Is that allowed?",
    answer:
      "  You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a    client. As long as you don't build a product that will directly    compete with Windster either as a UI kit, theme, or template,    it's fine.",
  },
  {
    id: 6,
    question: 'What does "free updates" include?',
    answer:
      " The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.",
  },
  {
    id: 7,
    question: "What does the free version include?",
    answer:
      " The free version of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it. ",
  },
];
const data3 = [
  {
    id: 8,
    question: 'What does "lifetime access" exactly mean?',
    answer:
      " Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.  You can use this version for any purposes, because it is open-source under the MIT license.",
  },
  {
    id: 9,
    question: "What is the difference between Windster and Tailwind UI?",
    answer:
      "Although both Windster and Tailwind UI are built for integration      with Tailwind CSS, the main difference is in the design, the      pages, the extra components and UI elements that Windster      includes.",
  },
  {
    id: 10,
    question: "Can I use Windster in open-source projects?",
    answer:
      " Generally, it is accepted to use Windster in open-source      projects, as long as it is not a UI library, a theme, a      template, a page-builder that would be considered as an      alternative to Windster itself.",
  },
];
