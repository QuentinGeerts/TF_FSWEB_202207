const messageMapper = (messageRow) => {

  return {
    messageId: messageRow['message_id'],
    pseudo: messageRow['pseudo'],
    content: messageRow['content'],
    createdAt: messageRow['created_at']
  }

}

module.exports = { messageMapper }