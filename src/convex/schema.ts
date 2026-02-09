import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	tasks: defineTable({
		text: v.string(),
		isCompleted: v.boolean()
	}),
	recipes: defineTable({
		title: v.string(),
		slug: v.string(),
		description: v.string(),
		ingredients: v.string(),
		instructions: v.string(),
		image: v.string(),
		createdAt: v.string(),
		updatedAt: v.string(),
		userId: v.string(),
		preparationTime: v.number()
	}).index('by_slug', ['slug'])
});
