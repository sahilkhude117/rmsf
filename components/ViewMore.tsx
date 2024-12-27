import { Paragraph } from './Paragraph';

export const ViewMore = () => {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12">
      <div className="w-full mx-auto space-y-4 text-center">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          RAMANLAL MANIYAR SMRUTI FOUNDATION
        </h1>
      </div>

      <div className="dark:text-gray-800 space-y-6">
        <Paragraph
          content={`The Ramanlal Maniyar Smruti Foundation (RMS Foundation), based in Gadhinglaj, continues the legacy of Late Shri Ramanlal Maniyar by supporting education, healthcare, and providing food to the needy. We offer scholarships to deserving students, help pay medical bills for those in need, and ensure food reaches those facing hunger.`}
        />
        <Paragraph
          content={`Founded to honor Ramanbhai’s vision of empowering the underprivileged, RMS Foundation works to create a positive impact in the community. Our efforts complement local government initiatives, making a real difference in the lives of many.`}
        />
        <Paragraph
          content={`The Ramanlal Maniyar Smruti Foundation was established to honor the life and legacy of Late Shri Ramanlal Maniyar, who dedicated himself to the welfare of others. Born into a well-respected family, Ramanbhai was always driven by a deep sense of empathy for those in need. He completed his education in Gadhinglaj and Sangli and was greatly influenced by the vision of leaders like Pandit Jawaharlal Nehru and Indira Gandhi. He also received guidance from Shri Dr. S.S. Ghali, who shaped his social work. Ramanbhai's unwavering belief in the power of education led him to start several businesses, creating job opportunities for the people of Gadhinglaj, while constantly encouraging the community to focus on learning and self-reliance.`}
        />
        <Paragraph
          content={`Despite his promising future, Ramanbhai's life was tragically cut short at the age of 42. However, his impact on the lives of those he touched is lasting. His efforts to support and uplift the community have been passed down through the Ramanlal Maniyar Smruti Foundation. The foundation, formed by his family and friends, carries forward his vision of empowering individuals, providing scholarships, supporting health treatments, and ensuring that no one goes hungry. Through these initiatives, RMS Foundation continues to inspire others to follow in Ramanbhai's footsteps and contribute to building a better, more compassionate society.`}
        />
      </div>
    </article>
  );
};
