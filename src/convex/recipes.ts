import { v } from 'convex/values';
import { query } from './_generated/server';

export const get = query({
	args: {},
	handler: async (ctx) => {
		const recipes = await ctx.db.query('recipes').collect();
		return recipes;
	}
});

export const getById = query({
	args: { id: v.id('recipes') },
	handler: async (ctx, { id }) => {
		return await ctx.db.get('recipes', id);
	}
});
