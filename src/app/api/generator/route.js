

import Replicate from "replicate";
import { NextResponse } from 'next/server';

export async function POST(req) {

    // const { topic, mood } = req.body;
    // const { selected, topicValue, wordCount } = req.body;
    // console.log(req.body, "request body from route.js")

    const body = await req.json();
    const { selected, topicValue } = body;
    console.log(req.body, "request body from route.js")

    console.log(selected, "selected")
    console.log(topicValue, "topicValue")
    // console.log(wordCount, "Word count")

    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    });

    // if (selected.length > 0 && topicValue > 0 && wordCount > 0) {

    try {
        const output = await replicate.run(
            "meta/llama-2-13b-chat:f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d",
            {
                input: {

                    prompt: `Can you write a ${selected} post on ${topicValue}. Add trending hashtag related to this topic as well. `,
                    system_prompt: `You are a helpful, respectful and honest social media assistant. Always answer as helpfully as possible, while being safe. 
                    Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.  
                    Please ensure that your responses are socially unbiased and positive in nature.If a question does not make any sense, 
                    or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a 
                    question, please don't share false information.`,
                    max_new_tokens: 500,

                }
            }
        );

        // res.status(200).json({ tweet: output });
        return new NextResponse(JSON.stringify({ tweet: output }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error("AI tweet generation failed:", error);
        res.status(500).json({ error: "AI tweet generation failed" });
    }

}






