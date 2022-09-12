import Posts from "../model/Posts";

export const addPost = async (req, res, next) => {

    //Add Trade Post

    try {



        const { teamName, willingToTrade, wantToReceive } = req.body;

        const post = await new Posts({
            teamName,
            willingToTrade,
            wantToReceive,
        });

        await post.save();

        return res.status(200).json({ msg: "Post added." });

    } catch (err) {
        console.log(err);
    }
}


//View all posts

export const viewAll = async (req, res, next) => {
    try {
        let all;

        all = await Posts.find();

        if (all) {
            return res.status(200).json({ posts: all });
        }

        if (!all) {
            return res.status(404).json({ msg: "Unable to find Posts." });
        }

    } catch (err) {
        console.log(err);
    }
}