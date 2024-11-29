import { MainLayout } from "@/components/layout/main-layout";
import Post from "@/components/post";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const POSTS = [
  {
    author: "YOU",
    content:
      "Traveling is the therapy for the soul. It feels like second you can't tell anyone about. Mountain's tell us you like no one else could in the blank mid winter, which are the advice for the heart and soul.",
    likes: 24,
    comments: 24,
    timeAgo: "4 days ago",
  },
  {
    author: "Elsa Jones",
    content:
      "Reminiscing the chill day kindle living room in the main chair in our house. #interiordesign #design #livingroom",
    likes: 34,
    comments: 18,
    timeAgo: "2 days ago",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-4 w-full flex items-center justify-center flex-col">
        <Tabs
          defaultValue="account"
          className="w-full items-center justify-center flex flex-col"
        >
          <TabsList defaultValue="posts">
            <TabsTrigger value="posts">All Posts</TabsTrigger>
            <TabsTrigger value="allComments">
              No comment for last 30 days
            </TabsTrigger>
            <TabsTrigger value="myComments">My comments</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            {POSTS.map((post, i) => (
              <Post key={i} {...post} />
            ))}
          </TabsContent>
          <TabsContent value="allComments">All Comments</TabsContent>
          <TabsContent value="myComments">My Comments </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
