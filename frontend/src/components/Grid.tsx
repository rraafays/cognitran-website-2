import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                `
                {[
                    { id: 1, title: "Title1", decription: "Desc1" },
                    { id: 1, title: "Title1", decription: "Desc1" },
                    { id: 1, title: "Title1", decription: "Desc1" },
                    { id: 1, title: "Title1", decription: "Desc1" },
                    { id: 1, title: "Title1", decription: "Desc1" },
                ].map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.decription}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
