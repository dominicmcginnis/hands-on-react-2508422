export default ({
  member,
  prevMember,
  nextMember,
  handleClose,
  handleNext,
  handlePrev,
}) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <nav>
          <ul>
            <li>
              <button onClick={handlePrev} disabled={!prevMember}>
                Previous
              </button>
            </li>
            <li>
              <button onClick={handleNext} disabled={!nextMember}>
                Next
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#close"
                aria-label="Close"
                className="close"
                data-target="modal-member"
                onClick={handleClose}
              ></a>
            </li>
          </ul>
        </nav>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "200px" }}
              src={`images/${member.slug}.svg`}
              alt={member.name}
            />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  );
};
