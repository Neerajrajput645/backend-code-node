const OneSignal = require("@onesignal/node-onesignal");

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY;

const app_key_provider = {
  getToken() {
    return ONESIGNAL_REST_API_KEY;
  },
};

const configuration = OneSignal.createConfiguration({
  authMethods: {
    app_key: {
      tokenProvider: app_key_provider,
    },
  },
});

const client = new OneSignal.DefaultApi(configuration);

const sendNotification = async (data, deviceToken) => {
  try {
    const userId = deviceToken; // Replace with deviceToken if needed
    const { title, body } = data;

    const notification = new OneSignal.Notification();
    notification.app_id = ONESIGNAL_APP_ID;
    notification.small_icon = "ic_stat_onesignal_default";

    if (userId === "all") {
      notification.included_segments = ["Active Users"];
    } else {
      notification.include_player_ids = [userId];
      // notification.include_external_user_ids = [userId];
    }
    notification.headings = { en: title };
    notification.contents = { en: body };

    const { id } = await client.createNotification(notification);

    const notificationInfo = await client.getNotification(ONESIGNAL_APP_ID, id);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

module.exports = sendNotification;
