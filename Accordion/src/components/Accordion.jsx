import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est, tempore perspiciatis quisquam et maxime numquam doloribus repellendus adipisci iusto.",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est, tempore perspiciatis quisquam et maxime numquam doloribus repellendus adipisci iusto.",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est, tempore perspiciatis quisquam et maxime numquam doloribus repellendus adipisci iusto.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null); // 1, 2, 3....
  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          onOpen={handleOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        key={4}
        id={4}
        title={"Title"}
        onOpen={handleOpen}
        open={open}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          laborum.
        </p>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, onOpen, open, children }) {
  const isOpen = id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => onOpen(id)}>
        <div>{title} </div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
