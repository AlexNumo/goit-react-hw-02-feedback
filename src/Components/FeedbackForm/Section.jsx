import FeedbackForm from "./FeedbackForm";
import PropTypes from "prop-types";
export default function Section({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <FeedbackForm initialValue={0} onLeaveFeedback={false} />
    </>
  );
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
};