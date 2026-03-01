const EVENT_DETAILS = {
  vows: {
    dateLabel: "Saturday, June 20th, 2026",
    timeLabel: "12:00 PM - 2:00 PM",
  },
  celebration: {
    dateLabel: "Saturday, June 20th, 2026",
    timeLabel: "3:00 PM - 10:00 PM",
  },
  venueLabel: "Plot 14 Folashade Ave St, Lekki Phase 1, Lekki 106104, Lagos, Nigeria",
}

const ICONS = {
  calendar: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
      <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" stroke="#D28A2D" stroke-width="1.5"/>
      <path d="M3.5 9H20.5" stroke="#D28A2D" stroke-width="1.5"/>
      <path d="M8 3.5V7" stroke="#D28A2D" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M16 3.5V7" stroke="#D28A2D" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
  clock: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
      <circle cx="12" cy="12" r="8.5" stroke="#D28A2D" stroke-width="1.5"/>
      <path d="M12 7.5V12L15.5 14" stroke="#D28A2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  vows: `
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="23" height="23" stroke="#D2962D"/>
    <path d="M7.3335 14.0002C7.3335 14.613 7.4542 15.2198 7.68872 15.786C7.92325 16.3522 8.26699 16.8667 8.70033 17.3C9.13367 17.7333 9.64812 18.0771 10.2143 18.3116C10.7805 18.5461 11.3873 18.6668 12.0002 18.6668C12.613 18.6668 13.2198 18.5461 13.786 18.3116C14.3522 18.0771 14.8667 17.7333 15.3 17.3C15.7333 16.8667 16.0771 16.3522 16.3116 15.786C16.5461 15.2198 16.6668 14.613 16.6668 14.0002C16.6668 13.3873 16.5461 12.7805 16.3116 12.2143C16.0771 11.6481 15.7333 11.1337 15.3 10.7003C14.8667 10.267 14.3522 9.92325 13.786 9.68873C13.2198 9.4542 12.613 9.3335 12.0002 9.3335C11.3873 9.3335 10.7805 9.4542 10.2143 9.68873C9.64812 9.92325 9.13367 10.267 8.70033 10.7003C8.26699 11.1337 7.92325 11.6481 7.68872 12.2143C7.4542 12.7805 7.3335 13.3873 7.3335 14.0002Z" stroke="#D2962D" stroke-width="1.5"/>
    <path d="M12.0002 9.3335L9.3335 6.66683L10.6668 5.3335H12.0002M12.0002 9.3335L14.6668 6.66683L13.3335 5.3335H12.0002" stroke="#D2962D" stroke-width="1.5"/>
    </svg>
  `,
  celebration: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2525_46)">
    <path d="M7.95105 10.8762L7.0323 12.9438C5.8723 15.5525 5.29293 16.8569 5.92605 17.49C6.55918 18.1231 7.8623 17.5431 10.4711 16.3837L12.5398 15.4637C14.1129 14.7644 14.8998 14.415 15.0248 13.7406C15.1498 13.0662 14.5411 12.4575 13.3236 11.2406L12.1748 10.0912C10.9579 8.87375 10.3492 8.265 9.6748 8.39063C9.00043 8.51563 8.65105 9.3025 7.95168 10.8756M8.4773 10.5625L12.8523 14.9375M7.2273 13.6875L9.7273 16.1875M14.4148 9L16.2898 7.125M13.2879 5.25C13.5379 5.66687 13.7373 6.75 12.5398 7.75M18.1648 10.1269C17.7479 9.87688 16.6648 9.6775 15.6648 10.875M15.6648 5.25V5.2625M18.1648 7.75V7.7625M17.5398 12.125V12.1375M11.2898 5.875V5.8875" stroke="#CE927E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <rect x="0.5" y="0.5" width="23" height="23" stroke="#CE927E"/>
    <defs>
    <clipPath id="clip0_2525_46">
    <rect width="15" height="15" fill="white" transform="translate(4.41504 4)"/>
    </clipPath>
    </defs>
    </svg>

  `,
  venue: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
      <path d="M12 20C12 20 6 14.8 6 10.8C6 7.6 8.7 5 12 5C15.3 5 18 7.6 18 10.8C18 14.8 12 20 12 20Z" stroke="#D28A2D" stroke-width="1.5"/>
      <circle cx="12" cy="11" r="2.2" stroke="#D28A2D" stroke-width="1.5"/>
    </svg>
  `,
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export function buildRsvpEmailHtml({ recipientName, recipientStatus = "Invitee", childrenCount, ticketNumber }) {
  const safeRecipientName = escapeHtml(recipientName)
  const safeRecipientStatus = escapeHtml(recipientStatus)
  const safeChildrenCount = escapeHtml(childrenCount)
  const safeTicketNumber = escapeHtml(ticketNumber)

  return `
    <div style="margin:0;padding:0;font-family:'Inter','Georgia',serif;color:#3d3d3d;">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
      </style>
      <div style="max-width:620px;margin:32px auto;padding:40px 28px;border:1px solid #d5d1cb;background:#F8F6F1;">
        <p style="margin:0 0 20px;text-align:center;font-size:12px;letter-spacing:3px;text-transform:uppercase;">You're Invited</p>
        <h1 style="margin:0;text-align:center;font-weight:400;font-size:56px;line-height:1.1;">Praise &amp; Victor</h1>
        <p style="margin:6px 0 34px;text-align:center;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Request the pleasure of your company</p>

        <div style="border:1px solid #c9c4bd;padding:22px 24px;margin-bottom:16px;background:#FFFFFF;">
          <p style="margin:0 0 10px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#6f6f6f;">Date</p>
          <p style="margin:0 0 20px;font-size:14px;font-weight:400;color:#4a4a4a;">${ICONS.calendar} <span style="vertical-align:middle;">${EVENT_DETAILS.vows.dateLabel}</span></p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="width:50%;vertical-align:top;padding-right:12px;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 10px;">
                  <tr>
                    <td style="width:22px;vertical-align:top;padding-right:6px;">
                      ${ICONS.vows}
                    </td>
                    <td style="vertical-align:top;">
                      <p style="margin:0;font-size:15px;font-weight:500;color:#4a4a4a;line-height:1.2;">The Vows</p>
                      <p style="margin:2px 0 0;font-size:13px;font-weight:400;color:#6f6f6f;">Exchange of promises</p>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 8px;font-size:13px;font-weight:400;color:#555555;">${ICONS.calendar} <span style="vertical-align:middle;">${EVENT_DETAILS.vows.dateLabel}</span></p>
                <p style="margin:0;font-size:13px;font-weight:400;color:#555555;">${ICONS.clock} <span style="vertical-align:middle;">${EVENT_DETAILS.vows.timeLabel}</span></p>
              </td>
              <td style="width:50%;vertical-align:top;padding-left:12px;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 10px;">
                  <tr>
                    <td style="width:22px;vertical-align:top;padding-right:6px;">
                      ${ICONS.celebration}
                    </td>
                    <td style="vertical-align:top;">
                      <p style="margin:0;font-size:15px;font-weight:500;color:#4a4a4a;line-height:1.2;">The Celebration</p>
                      <p style="margin:2px 0 0;font-size:13px;font-weight:400;color:#6f6f6f;">Exchange of promises</p>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 8px;font-size:13px;font-weight:400;color:#555555;">${ICONS.calendar} <span style="vertical-align:middle;">${EVENT_DETAILS.celebration.dateLabel}</span></p>
                <p style="margin:0;font-size:13px;font-weight:400;color:#555555;">${ICONS.clock} <span style="vertical-align:middle;">${EVENT_DETAILS.celebration.timeLabel}</span></p>
              </td>
            </tr>
          </table>
          <p style="margin:24px 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#6f6f6f;">Venue</p>
          <p style="margin:0;font-size:15px;font-weight:500;line-height:1.5;color:#4a4a4a;">${ICONS.venue} <span style="vertical-align:middle;">${EVENT_DETAILS.venueLabel}</span></p>
        </div>

        <div style="border:1px solid #c9c4bd;padding:22px 24px;background:#FFFFFF;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="width:50%;vertical-align:top;padding-right:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Guest</p>
                <p style="margin:0 0 14px;font-size:14px;">${safeRecipientName}</p>
              </td>
              <td style="width:50%;vertical-align:top;padding-left:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Status</p>
                <p style="margin:0 0 14px;font-size:14px;">${safeRecipientStatus}</p>
              </td>
            </tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="width:50%;vertical-align:top;padding-right:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Children</p>
                <p style="margin:0;font-size:14px;">${safeChildrenCount}</p>
              </td>
              <td style="width:50%;vertical-align:top;padding-left:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Ticket Number</p>
                <p style="margin:0;font-size:14px;">${safeTicketNumber}</p>
              </td>
            </tr>
          </table>
        </div>

        <p style="margin:38px 0 0;text-align:center;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Thank you for being a part of our celebration</p>
      </div>
    </div>
  `
}

export function buildRsvpEmailText({ recipientName, recipientStatus = "Invitee", childrenCount, ticketNumber }) {
  return `Praise & Victor RSVP Confirmation

Vows Date: ${EVENT_DETAILS.vows.dateLabel}
Vows Time: ${EVENT_DETAILS.vows.timeLabel}
Celebration Date: ${EVENT_DETAILS.celebration.dateLabel}
Celebration Time: ${EVENT_DETAILS.celebration.timeLabel}
Venue: ${EVENT_DETAILS.venueLabel}
Guest: ${recipientName}
Status: ${recipientStatus}
Children: ${childrenCount}
Ticket Number: ${ticketNumber}
`
}
