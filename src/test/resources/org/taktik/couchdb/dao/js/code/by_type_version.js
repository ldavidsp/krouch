map = function(doc) { if (doc.java_type == 'Code' && !doc.deleted) emit([doc.type, doc.version], doc._id)}