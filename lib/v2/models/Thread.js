/**
 * Copyright(c) 2016 calidion <calidion@gmail.com>
 * Apache 2.0 Licensed
 */
module.exports = {
  connection: 'default',
  identity: 'thread',
  schema: true,
  tableName: 'topics',
  attributes: {
    title: 'string',
    content: 'text',
    user: {
      columnName: 'author_id',
      model: 'user',
      required: true
    },
    // 置顶帖
    sticky: {
      columnName: 'top',
      type: 'boolean',
      defaultsTo: false
    },
    // 精华贴
    highlighted: {
      columnName: 'good',
      type: 'boolean',
      defaultsTo: false
    },
    // 锁定贴
    locked: {
      columnName: 'lock',
      type: 'boolean',
      defaultsTo: false
    },
    replies: {
      columnName: 'reply_count',
      type: 'int',
      defaultsTo: 0
    },
    visits: {
      columnName: 'visit_count',
      type: 'int',
      defaultsTo: 0
    },
    favorites: {
      columnName: 'collect_count',
      type: 'int',
      defaultsTo: 0
    },
    createdAt: {
      columnName: 'created_at',
      type: 'datetime',
      defaultsTo: Date.now
    },
    updatedAt: {
      columnName: 'updated_at',
      type: 'datetime',
      defaultsTo: Date.now
    },
    lastReplier: {
      columnName: 'last_reply',
      model: 'user'
    },
    lastReplyAt: {
      columnName: 'last_reply_at',
      type: 'datetime',
      defaultsTo: Date.now
    },
    isHtmlContent: {
      columnName: 'content_is_html',
      type: 'boolean',
      defaultsTo: Date.now
    },
    category: {
      columnName: 'tab',
      type: 'string'
    },
    isDeleted: {
      columnName: 'deleted',
      type: 'boolean',
      defaultsTo: false
    }
  }
};
