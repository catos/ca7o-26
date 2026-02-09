import { v } from 'convex/values';
import { query } from './_generated/server';

export const get = query({
	args: {},
	handler: async (ctx) => {
		const recipes = await ctx.db.query('recipes').collect();
		return recipes;
	}
});

export const getBySlug = query({
	args: { slug: v.string() },
	handler: async (ctx, args) => {
		return await ctx.db
			.query('recipes')
			.withIndex('by_slug', (q) => q.eq('slug', args.slug))
			.first();
	}
});
