
export default function Contact ({ contact }) {

  return (
    <div className="contact">
      <div className="imgField">
        {contact?.avatar?.indexOf('http') !== -1 ?
          (<img
            src={contact?.avatar || null}
          />) : (
            <img src="https://solely-resume.netlify.app/static/media/profile.ee489764521abe34026b.png" alt="" />
          )
        }
      </div>
      <div className="contactContent">
        <h1 className="contactName">
          <div className="name">
            {contact?.name ? (
              <>
                {contact.name}
              </>
            ) : (
              <p>No Name</p>
            )}{" "}
          </div>

        </h1>

        {contact?.twitter ? (
          <p className="twitter">
            {
              contact?.twitter ? (<a
                target="_blank"
                href={`https://solely-resume.netlify.app/`}
              >
                {contact?.twitter}
              </a>) : (<a href="https://solely-resume.netlify.app/">No twitter</a>)
            }
          </p>
        ) : (
          <p>No twitter</p>
        )}
        {contact?.notes ? (<p className="notes">{contact?.notes}</p>) : (<p>No notes</p>)}
      </div>
    </div>
  )
}

