import BackButton from "@/components/BackButton";
import UserPostList from "@/components/UserPost/UserPostList";

const UserPostPage = () => {
    return (
        <div className="flex flex-col gap-y-4 pb-8">
            <BackButton text="Back to Users" />
            <h4 className="text-[36px] font-bold text-header">
                James Sunderland
            </h4>
            <div className="text-sm text-primary">
                <span>james.sunderland@acme.corp • </span>
                <span className="font-medium">4 Posts</span>
            </div>

            <UserPostList />
        </div>
    );
};

export default UserPostPage;
