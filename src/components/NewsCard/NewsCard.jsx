import cardPhoto from "../../assets/card-photo.png";
import "./NewsCard.css";

function NewsCard() {
  return (
    <>
      <li className="cardItem">
        <img src={cardPhoto} alt="news image" className="cardItem__img" />
        <button className="cardIte__btn-save"></button>
        <div className="cardItem__content">
          <p className="cardItem__content_date">November 4, 2020</p>
          <p className="cardItem__content_headline">
            Everyone Needs a Special 'Sit Spot' in Nature
          </p>
          <p className="cardItem__content_brief">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find looooooo
          </p>
          <p className="cardItem__content_src">{"treehugger".toUpperCase()}</p>
        </div>
      </li>
      <li className="cardItem">
        <img src={cardPhoto} alt="news image" className="cardItem__img" />
        <button className="cardIte__btn-save"></button>
        <div className="cardItem__content">
          <p className="cardItem__content_date">November 4, 2020</p>
          <p className="cardItem__content_headline">
            Everyone Needs a Special 'Sit Spot' in Nature
          </p>
          <p className="cardItem__content_brief">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find looooooo
          </p>
          <p className="cardItem__content_src">{"treehugger".toUpperCase()}</p>
        </div>
      </li>
      <li className="cardItem">
        <img src={cardPhoto} alt="news image" className="cardItem__img" />
        <button className="cardIte__btn-save"></button>
        <div className="cardItem__content">
          <p className="cardItem__content_date">November 4, 2020</p>
          <p className="cardItem__content_headline">
            Everyone Needs a Special 'Sit Spot' in Nature
          </p>
          <p className="cardItem__content_brief">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find looooooo
          </p>
          <p className="cardItem__content_src">{"treehugger".toUpperCase()}</p>
        </div>
      </li>
    </>
  );
}

export default NewsCard;
