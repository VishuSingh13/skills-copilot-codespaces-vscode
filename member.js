function skillsMember() {
  return {
    name: "skills",
    description: "List of member skills",
    async resolve(member, args, context, info) {
      return context.db.Skill.findAll({
        where: { memberId: member.id },
        order: [["id", "ASC"]],
      });
    },
  };
}