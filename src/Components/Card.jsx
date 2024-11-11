/* eslint-disable react/prop-types */
function Card({
  authorImage,
  authorName,
  authorTitle,
  reviewTitle,
  reviewDescription,
  cardStyle,
  cardBackgroundStyle,
  authorNameStyle,
  authorImageStyle,
  authorTitleStyle,
  reviewTitleStyle,
  reviewDescriptionStyle,
}) {
  const { card, quote, image, name, job, title, description } = customTheme;

  return (
    <div
      className={
        cardBackgroundStyle
          ? `${card[cardStyle]} relative`
          : `${card[cardStyle]}`
      }
    >
      {cardBackgroundStyle && (
        <img src={cardBackgroundStyle} className={quote} alt='quote' />
      )}

      <div className='flex gap-4 items-center mb-4'>
        <img
          src={authorImage}
          alt={authorName}
          className={image[authorImageStyle]}
        />
        <div>
          <h2 className={name[authorNameStyle]}>{authorName}</h2>
          <h3 className={job[authorTitleStyle]}>{authorTitle}</h3>
        </div>
      </div>
      <h3 className={title[reviewTitleStyle]}>{reviewTitle}</h3>
      <p className={description[reviewDescriptionStyle]}>{reviewDescription}</p>
    </div>
  );
}

const customTheme = {
  card: {
    violet: 'bg-violet py-6 px-8 rounded-md z-10',
    gray: 'bg-grayBlue py-6 px-8 rounded-md z-10',
    blue: 'bg-blackBlue py-6 px-8 rounded-md z-10',
    white: 'bg-white-100 py-6 px-8 rounded-md z-10',
  },
  quote: 'absolute top-0 right-5 -z-10',
  image: {
    violet: 'outline-2 outline outline-[#A775F1] rounded-full w-8',
    white: 'outline-2 outline outline-white-100 rounded-full w-8',
  },
  name: {
    light: 'text-white-200 font-md leading-4',
    dark: 'text-grayBlue font-md leading-4',
  },
  job: {
    light: 'text-white-200 text-[11px] opacity-50',
    dark: 'text-grayBlue text-[11px] opacity-50',
  },
  title: {
    light: 'text-white-100 text-xl font-semibold leading-6 mb-4',
    dark: 'text-grayBlue text-xl font-semibold leading-6 mb-4',
  },
  description: {
    light: 'text-white-100 opacity-70',
    dark: 'text-grayBlue opacity-70',
  },
  grid: {
    base: '',
    wide: '',
    tall: '',
  },
};

/*
layout: (grid template row-2 col-4)
  - base: row-span-1 col-span-1
  - wide: row-span-1 col-span-2
  - tall: row-span-2 col-span-1
  */

export default Card;
