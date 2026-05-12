import React, { useState, useEffect } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonItem, IonAvatar, IonCardTitle, IonCardSubtitle,
  IonButton, IonFab, IonFabButton, IonFabList, IonIcon
} from '@ionic/react';
import { add, document, colorPalette, globe, heart, chatbubble } from 'ionicons/icons';

interface Post {
  id: number;
  username: string;
  content: string;
  time: string;
  avatar: string;
  likes: number;
  comments: number;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts([
      { id: 1, username: 'AnnalynJean', content: 'Hello world! 🌊✨', time: '2h ago', avatar: 'https://i.pravatar.cc/50?img=1', likes: 5, comments: 2 },
      { id: 2, username: 'MJ_O', content: 'Just finished my project! 💻🚀', time: '5h ago', avatar: 'https://i.pravatar.cc/50?img=2', likes: 8, comments: 3 },
      { id: 3, username: 'Coder123', content: 'Ionic React is so fun! ⚡', time: '1d ago', avatar: 'https://i.pravatar.cc/50?img=3', likes: 12, comments: 4 },
    ]);
  }, []);

  const handleLike = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleComment = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, comments: p.comments + 1 } : p));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {posts.map(post => (
          <IonCard key={post.id}>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={post.avatar} alt={post.username} />
              </IonAvatar>
              <div>
                <IonCardTitle>{post.username}</IonCardTitle>
                <IonCardSubtitle>{post.time}</IonCardSubtitle>
              </div>
            </IonItem>
            <IonCardContent>{post.content}</IonCardContent>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 0' }}>
              <IonButton fill="clear" onClick={() => handleLike(post.id)}>
                <IonIcon icon={heart} slot="start" /> {post.likes}
              </IonButton>
              <IonButton fill="clear" onClick={() => handleComment(post.id)}>
                <IonIcon icon={chatbubble} slot="start" /> {post.comments}
              </IonButton>
            </div>
          </IonCard>
        ))}

        {/* Floating Action Button */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton size="small">
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={document} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette} />
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
