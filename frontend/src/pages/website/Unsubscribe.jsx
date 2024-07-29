const Unsubscribe = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="unsunscribe-card">
            <h1 className="title text-center">Unsubscribe</h1>
            <p className="text-center">
              You are about to unsubscribe from our newsletter. To confirm this
              action, please enter your email address below.
            </p>
            <form className="form-inline">
              <input
                type="email"
                className="form-control mr-sm-2"
                placeholder="Email address"
                required
              />
              <button type="submit" className="btn btn-primary">
                Unsubscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unsubscribe;
