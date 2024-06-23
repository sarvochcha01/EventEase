const VenueAction = async ({ request }) => {
  const formData = await request.formData();

  console.log(formData.get("eventVenueName"));
  return null;
};

export default VenueAction;
