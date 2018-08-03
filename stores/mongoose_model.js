/**
 * @author Jan Zaloudek
 * @date 28.10.13
 * @time 0:25
 * @filename
 */

module.exports = function mongooseModelFactory(mongoose) {
  var RelationSchema = new mongoose.Schema({
    context: String,
    subject: String,
    role: String,
    object: String
  });

  RelationSchema.index({ context: 1, subject: 1, role: 1, object: 1 }, { unique: true });
  RelationSchema.index({ context: 1, role: 1, object: 1 });
  RelationSchema.index({ context : 1, object : 1, subject : 1 });

  return mongoose.model('Relation', RelationSchema);
}