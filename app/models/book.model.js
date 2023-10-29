module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      summary: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Book = mongoose.model('book', schema);
  return Book;
};
