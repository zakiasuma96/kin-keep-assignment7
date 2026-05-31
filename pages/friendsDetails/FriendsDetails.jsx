import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import FriendDetailsLeft from '../../components/ui/FriendDetailsLeft';
import FriendDetailsRight from '../../components/ui/FriendDetailsRight';

const FriendsDetails = () => {
    const {id:friendIdParams} = useParams();
    console.log({id:friendIdParams}, "id");

    const friends =useLoaderData();
    console.log(friends, "friends");
    const expectedFriend =friends.find(friend=> friend.id == friendIdParams);
    console.log(expectedFriend, "expectedFriend");
    const {id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date} = expectedFriend;

    return (
        <>

        <section className='max-w-6xl mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-12 justify-between items-start gap-10  '>

         {/* left card section         */}

         <div className='lg:col-span-4 space-y-4'>

<FriendDetailsLeft id={id} name={name} picture={picture} email={email} days_since_contact={days_since_contact} status={status} tags={tags} bio={bio} goal={goal} next_due_date={next_due_date}/>

         </div>



      {/* right card section  */}
      <div className='lg:col-span-8'>  
        <FriendDetailsRight days_since_contact={days_since_contact} goal={goal} next_due_date={next_due_date} expectedFriend={expectedFriend}/>


            </div>


            </div>



        </section>
         </>

    );
};

export default FriendsDetails;