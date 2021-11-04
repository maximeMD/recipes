module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const unreadBadges = document.querySelectorAll('span.unread');
    const unreadBadgesArray = [...unreadBadges];
    const unreadBadgesValues = unreadBadgesArray.map(unreadBadgesArray =>
      Number.parseInt(unreadBadgesArray.textContent),
    );
    const unreadMessagesCount = unreadBadgesValues.reduce((a, b) => a + b);

    Ferdi.setBadge(unreadMessagesCount);
  };

  Ferdi.loop(getMessages);
};
