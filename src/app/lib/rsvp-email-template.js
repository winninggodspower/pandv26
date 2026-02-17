const EVENT_DETAILS = {
  dateLabel: "Saturday, June 20th, 2026",
  timeLabel: "12:00 PM - 2:00 PM",
  venueLabel: "Plot 14 Folashade Ave St, Lekki Phase 1, Lekki 106104, Lagos, Nigeria",
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
    <div style="margin:0;padding:0;font-family:Georgia,'Times New Roman',serif;color:#3d3d3d;">
      <div style="max-width:620px;margin:32px auto;padding:40px 28px;border:1px solid #d5d1cb;background:#F8F6F1;">
        <p style="margin:0 0 20px;text-align:center;font-size:12px;letter-spacing:3px;text-transform:uppercase;">You're Invited</p>
        <h1 style="margin:0;text-align:center;font-weight:400;font-size:56px;line-height:1.1;">Praise &amp; Victor</h1>
        <p style="margin:6px 0 34px;text-align:center;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Request the pleasure of your company</p>

        <div style="border:1px solid #c9c4bd;padding:22px 24px;margin-bottom:16px;background:#FFFFFF;">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Date</p>
          <p style="margin:0 0 14px;font-size:14px;">${EVENT_DETAILS.dateLabel}</p>
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Time</p>
          <p style="margin:0 0 14px;font-size:14px;">${EVENT_DETAILS.timeLabel}</p>
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Venue</p>
          <p style="margin:0;font-size:14px;line-height:1.5;">${EVENT_DETAILS.venueLabel}</p>
        </div>

        <div style="border:1px solid #c9c4bd;padding:22px 24px;background:#FFFFFF;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="vertical-align:top;padding-right:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Guest</p>
                <p style="margin:0 0 14px;font-size:14px;">${safeRecipientName}</p>
              </td>
              <td style="vertical-align:top;padding-left:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Status</p>
                <p style="margin:0 0 14px;font-size:14px;">${safeRecipientStatus}</p>
              </td>
            </tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="vertical-align:top;padding-right:12px;">
                <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f6f6f;">Children</p>
                <p style="margin:0;font-size:14px;">${safeChildrenCount}</p>
              </td>
              <td style="vertical-align:top;padding-left:12px;">
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

Date: ${EVENT_DETAILS.dateLabel}
Time: ${EVENT_DETAILS.timeLabel}
Venue: ${EVENT_DETAILS.venueLabel}
Guest: ${recipientName}
Status: ${recipientStatus}
Children: ${childrenCount}
Ticket Number: ${ticketNumber}
`
}
