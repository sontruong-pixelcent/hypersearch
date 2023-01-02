import React from "react";
import AddToCalendar from "react-add-to-calendar";
import RichContent from "./../RichContent";
import {
  H2SmallStrong,
  H5Small,
  H5SmallStrong,
  H5Strong,
} from "./../Typography";
import { EventBodyDiv } from "./elements";
import MiscSocialSmall from "./../icons/MiscSocialSmall";
import { SmallButton } from "./../Buttons";

const EventBody = ({
  date,
  startTime,
  endTime,
  venue,
  venueLocation,
  leftInfo,
  communityInfo,
  mainColumn,
  topline,
  subTitle,
  addToCalendar,
  registerNow,
  theme,
  isSmallTitle,
  participants,
  eventType,
}) => {
  const color =
    (theme === "cyborg" && "var(--blue)") ||
    (theme === "nature" && "var(--green2)") ||
    (theme === "childhood" && "var(--pink)") ||
    "var(--green)";

  const [overlayOn, setOverlayOn] = React.useState(false);
  const [currentlySelected, setCurrentlySelected] = React.useState(null);

  const holderRef = React.useRef(null);

  const handleClickParticipants = (item, index) => {
    setCurrentlySelected(participants[index]);
    setOverlayOn(true);
  };

  return (
    <EventBodyDiv
      ref={holderRef}
      color={color}
      isSmallTitle={isSmallTitle}
      bodyType={eventType}
    >
      <H5Small>{topline}</H5Small>
      {participants?.length && (
        <div
          id="participants"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <H5Strong>PARTICIPANTS</H5Strong>
          {participants.map((item, index) => (
            <span
              key={index}
              onClick={() => handleClickParticipants(item, index)}
            >
              {item?.title}
            </span>
          ))}
        </div>
      )}
      <H5Small />
      <H2SmallStrong>{subTitle}</H2SmallStrong>
      <div>
        <div>
          {leftInfo && (
            <div style={{ display: "flex" }}>
              <div>
                <div style={{ display: "flex" }}>
                  <p>
                    <strong>Date</strong>
                  </p>
                  <p>{date}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p>
                    <strong>Starts</strong>
                  </p>
                  <p>{startTime}</p>
                </div>
                {endTime ? (
                  <div style={{ display: "flex" }}>
                    <p>
                      <strong>Ends</strong>{" "}
                    </p>
                    <p>{endTime}</p>
                  </div>
                ) : null}
                <div style={{ display: "flex" }}>
                  <p>
                    <strong>Venue</strong>{" "}
                  </p>
                  <p>{venue}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p>
                    <strong />{" "}
                  </p>
                  {venueLocation}
                </div>
              </div>
            </div>
          )}
          {addToCalendar ? (
            <SmallButton
              style={{ marginBottom: "20px" }}
              backgroundColor={color}
              color={color === "var(--blue)" ? "var(--white)" : "var(--black)"}
            >
              <AddToCalendar event={addToCalendar} />
            </SmallButton>
          ) : null}
          <p>
            {" "}
            {registerNow ? (
              <a class="btn_a" href={registerNow} target="_blank">
                Register Now
              </a>
            ) : null}{" "}
          </p>
          <H5SmallStrong style={{ marginTop: 0 }}>Share</H5SmallStrong>
          <MiscSocialSmall color={color || "var(--red)"} />
        </div>
        <div>
          <RichContent content={mainColumn} accentColor={color} />
        </div>
        {communityInfo && (
          <ul>
            <li>
              <H5SmallStrong>CONTACT DETAILS</H5SmallStrong>
              {communityInfo.communityMemberContactDetails.map((item) => (
                <p>
                  {item.col1}
                  {item?.col2 &&
                  item.col2.match(
                    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
                  ) ? (
                    <a
                      href={item.col2}
                      target="_blank"
                      style={{ color: "var(--white)" }}
                    >
                      {" "}
                      {item.col2}
                    </a>
                  ) : (
                    ` ${item?.col2}`
                  )}
                </p>
              ))}
              <p>{communityInfo.communityMemberEmailAddress}</p>
              <p>
                <a
                  href={communityInfo.communityMemberWebsite}
                  target="_blank"
                  style={{ color: "var(--white)" }}
                >
                  {" "}
                  {communityInfo.communityMemberWebsite}
                </a>
              </p>
            </li>
            <li>
              {communityInfo?.communityMemberOpeningHours ? (
                <>
                  <H5SmallStrong>OPENING HOURS</H5SmallStrong>
                  <p>{communityInfo.communityMemberOpeningHours}</p>
                </>
              ) : null}
            </li>
            <li>
              {communityInfo?.participantLocation &&
              communityInfo?.participantLocation?.length ? (
                <>
                  <H5SmallStrong>LOCATION</H5SmallStrong>
                  <p>communityInfo?.participantLocation[0]?.title</p>
                </>
              ) : (
                ""
              )}
            </li>
          </ul>
        )}
      </div>

      {overlayOn && holderRef?.current && (
        <EventParticipantsPopup
          communityMember={currentlySelected}
          photoCoordinates={holderRef.current
            .querySelector(`#participants`)
            .getBoundingClientRect()}
          holderCoordinates={holderRef.current.getBoundingClientRect()}
          randomNumber={
            (theme === "cyborg" && 1) ||
            (theme === "childhood" && 2) ||
            (theme === "nature" && 3)
          }
          closeThis={() => {
            setOverlayOn(false);
          }}
        />
      )}
    </EventBodyDiv>
  );
};

export default EventBody;
