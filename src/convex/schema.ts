import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	tasks: defineTable({
		text: v.string(),
		isCompleted: v.boolean()
	}),
	recipes: defineTable({
		_id: v.id('recipes'),
		title: v.string(),
		description: v.string(),
		ingredients: v.string(),
		instructions: v.string(),
		image: v.string(),
		createdAt: v.string(),
		updatedAt: v.string(),
		userId: v.string(),
		preparationTime: v.number()
	})
});
