'use client';

import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/datePickerRange';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { LuPencil, LuX, LuUser2 } from 'react-icons/lu';

import { useRef, useState } from 'react';

interface IAccount {
  pic: string;
  username: string;
}

const mockedFriends: Array<IAccount> = [
  {
    pic: 'DV',
    username: 'davidevignozzi'
  },
  {
    pic: 'AP',
    username: 'alessiapellicoro'
  },
  {
    pic: 'DP',
    username: 'donatopanico'
  },
  {
    pic: 'VS',
    username: 'valeriaspanu'
  },
  {
    pic: 'MM',
    username: 'monicamas'
  },
  {
    pic: 'MF',
    username: 'mikkofiore'
  },
  {
    pic: 'GD',
    username: 'ghebdeiana'
  }
];

const Page = () => {
  /**
   ** travel title logic
   */
  const [titleTravelConfirmed, isTitleTravelConfirmed] = useState(false);
  const [travelTitle, setTravelTitle] = useState('');

  const confirmTitle = (e: any) => {
    if (e.key === 'Enter') {
      travelTitle === '' || isTitleTravelConfirmed(true);
    }
  };

  /**
   * destination logic
   */
  const destinationArray: Array<string> = [];

  const [destinations, setDestinations] =
    useState<string[]>(destinationArray);
  const [destination, setDestination] = useState('');

  // add destination
  const confirmDestination = (e: any) => {
    if (e.key === 'Enter') {
      destination === '' ||
        setDestinations([...destinations, destination]);

      setDestination('');
    }
  };

  // remove destination
  const removeDestination = (index: number) => {
    setDestinations(destinations.filter((_, i) => index !== i));
  };

  /**
   * travel friends
   */
  const [selectedFriends, setSelectedFriends] = useState<IAccount[]>([]);

  // add friend in travel
  const friendsDropdown = useRef(null);
  const [usersOpen, setUsersOpen] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);

  const addFriend = (pic: string, username: string) => {
    for (const index in selectedFriends) {
      if (selectedFriends[index].username === username) {
        setUsersOpen(false);
        return;
      }
    }

    setAlreadyExists(false);
    if (alreadyExists === false) {
      setSelectedFriends([...selectedFriends, { pic, username }]);
      setUsersOpen(false);
    }
  };

  // remove friend from travel
  const removeFriend = (index: number) => {
    setSelectedFriends(selectedFriends.filter((_, i) => index !== i));
  };

  return (
    <main className='mx-4 flex flex-col gap-6'>
      {/* title */}
      {titleTravelConfirmed ? (
        <div className='flex flex-col gap-2'>
          <div className='flex w-full items-center justify-between'>
            <Label htmlFor='travel title'>Titolo del viaggio</Label>
            <LuPencil
              className='size-5 cursor-pointer text-[#94A3B8]'
              onClick={() => isTitleTravelConfirmed(false)}
            />
          </div>
          <h2 className='text-xl font-medium'>{travelTitle}</h2>
        </div>
      ) : (
        <div className='flex flex-col gap-2'>
          <Label htmlFor='travel title'>Titolo del viaggio</Label>
          <Input
            type='text'
            placeholder='Road trip'
            value={travelTitle}
            onChange={(e) => {
              setTravelTitle(e.currentTarget.value);
            }}
            onKeyUp={(e) => confirmTitle(e)}
          />
        </div>
      )}

      {/* destinations */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='destinations'>
          Destinazione o percroso <span className='text-red-600'>*</span>
        </Label>
        {destinations.length === 0 || (
          <>
            {destinations.map((destinationItem, i) => (
              <div
                key={i}
                className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
              >
                <p>{destinationItem}</p>
                <LuX
                  className='size-5 text-[#94A3B8]'
                  onClick={() => removeDestination(i)}
                />
              </div>
            ))}
          </>
        )}
        <Input
          type='text'
          placeholder='Cerca'
          onChange={(e) => {
            setDestination(e.currentTarget.value);
          }}
          onKeyUp={(e) => confirmDestination(e)}
          value={destination}
        />
      </div>

      {/* dates */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='dates'>
          Date del viaggio <span className='text-red-600'>*</span>
        </Label>
        <DatePickerWithRange />
      </div>

      {/* travel friends */}
      <div className='relative flex flex-col gap-4'>
        <Label htmlFor='travel friends'>Compagni di viaggio</Label>

        {selectedFriends.length !== 0 && (
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              {selectedFriends.map((friend: IAccount, i) => (
                <div
                  key={i}
                  className='flex w-full items-center justify-between  px-3 py-1 text-sm ring-offset-background'
                >
                  <div className='flex items-center gap-2'>
                    <div className='rounded-full bg-slate-300 p-1.5'>
                      {friend.pic}
                    </div>
                    {friend.username}
                  </div>
                  <LuX
                    className='size-5 cursor-pointer text-[#94A3B8]'
                    onClick={() => removeFriend(i)}
                  />
                </div>
              ))}
            </div>

            <div className='flex items-center gap-1 text-[#6A6A6A]'>
              <LuUser2 className='size-5' />
              <span>{selectedFriends.length}</span>
            </div>
          </div>
        )}

        <Input
          type='text'
          placeholder='@'
          onFocus={() => setUsersOpen(true)}
        />

        {/* dropdown */}
        {usersOpen && (
          <div
            ref={friendsDropdown}
            className='absolute top-full my-4 flex w-full flex-col gap-2 rounded-md bg-white p-2 shadow'
          >
            <div className='flex w-full justify-end'>
              <LuX
                className='size-5 cursor-pointer text-[#94A3B8]'
                onClick={() => setUsersOpen(false)}
              />
            </div>
            {mockedFriends.map((friend, i) => (
              <div
                key={i}
                className='flex w-full cursor-pointer items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
                onClick={() => addFriend(friend.pic, friend.username)}
              >
                <div className='flex items-center gap-2'>
                  <div className='rounded-full bg-slate-300 p-1.5'>
                    {friend.pic}
                  </div>
                  @{friend.username}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* to do */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='to do'>Cose da fare</Label>
        <Button
          variant='ghost'
          className='flex justify-end text-sm font-medium text-[#94A3B8]'
        >
          + Aggiungi un task
        </Button>
      </div>

      {/* notes */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='notes'>Note sul viaggio</Label>
        <Button
          variant='ghost'
          className='flex justify-end text-sm font-medium text-[#94A3B8]'
        >
          + Aggiungi una nota
        </Button>
      </div>

      {/* photos */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='photos'>Foto</Label>
        <Input id='picture' type='file' />
      </div>

      {/* booking */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='booking'>Prenotazioni</Label>
        <Input id='booking' type='file' />
      </div>

      <Button variant='outline' className='border-black'>
        Conferma
      </Button>
    </main>
  );
};
export default Page;
