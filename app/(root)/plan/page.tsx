'use client';

import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/datePickerRange';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

import { LuPencil, LuX, LuUser2 } from 'react-icons/lu';

import { useCallback, useRef, useState, KeyboardEvent } from 'react';

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
   * travel title logic
   *
   */
  const [titleTravelConfirmed, isTitleTravelConfirmed] = useState(false);
  const [travelTitle, setTravelTitle] = useState('');

  const confirmTitle = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        travelTitle === '' || isTitleTravelConfirmed(true);
      }
    },
    [travelTitle]
  );

  /**
   * destination logic
   *
   */
  const destinationArray: Array<string> = [];

  const [destinations, setDestinations] =
    useState<string[]>(destinationArray);
  const [destination, setDestination] = useState('');

  // add destination
  const confirmDestination = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        destination === '' ||
          setDestinations([...destinations, destination]);
        setDestination('');
      }
    },
    [destination, destinations]
  );

  // remove destination
  const removeDestination = useCallback(
    (index: number) => {
      setDestinations(destinations.filter((_, i) => index !== i));
    },
    [destinations]
  );

  /**
   * travel friends logic
   *
   */
  const [selectedFriends, setSelectedFriends] = useState<IAccount[]>([]);

  // add friend in travel
  const [usersOpen, setUsersOpen] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);
  const [friendSearch, setFriendSearch] = useState('');

  // filtered search
  const filteredFriends = mockedFriends.filter((friend) =>
    friend.username.toLowerCase().includes(friendSearch.toLowerCase())
  );

  const addFriend = useCallback(
    (pic: string, username: string) => {
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
    },
    [selectedFriends, alreadyExists]
  );

  // remove friend from travel
  const removeFriend = useCallback(
    (index: number) => {
      setSelectedFriends(selectedFriends.filter((_, i) => index !== i));
    },
    [selectedFriends]
  );

  /**
   * to do list logic
   *
   */
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<String[]>([]);
  const [lastTodo, setLastTodo] = useState('');
  const [isInputTodoShown, setIsInputTodoShown] = useState(false);

  // show todo
  const showEmptyTodo = useCallback(() => {
    setIsInputTodoShown(true);
  }, []);

  // add to do
  const addTodo = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setTodoList([...todoList, lastTodo]);
        setLastTodo('');
        if (todoInputRef.current) {
          todoInputRef.current.value = '';
        }
      }
    },
    [lastTodo, todoList]
  );

  // remove to do
  const removeTodo = useCallback(
    (index: number) => {
      setTodoList(todoList.filter((_, i) => index !== i));
    },
    [todoList]
  );

  /**
   *
   * notes logic
   */
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState('');

  // add notes
  const addNote = useCallback(
    (note: string) => {
      setNotes([...notes, note]);
    },
    [notes]
  );

  // remove notes
  const removeNotes = useCallback(
    (index: number) => {
      setNotes(notes.filter((_, i) => index !== i));
    },
    [notes]
  );

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
          onChange={(e) => setFriendSearch(e.currentTarget.value)}
        />

        {/* dropdown */}
        {usersOpen && (
          <div className='absolute top-full my-4 flex w-full flex-col gap-2 rounded-md bg-white p-2 shadow'>
            <div className='flex w-full justify-end'>
              <LuX
                className='size-5 cursor-pointer text-[#94A3B8]'
                onClick={() => setUsersOpen(false)}
              />
            </div>
            {filteredFriends.map((friend, i) => (
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
        {todoList.map((todo, i) => (
          <div
            key={i}
            className='flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'
          >
            <Checkbox />
            <div className='w-full'>{todo}</div>
            <LuX
              className='size-5 cursor-pointer text-[#94A3B8]'
              onClick={() => {
                removeTodo(i);
              }}
            />
          </div>
        ))}

        {isInputTodoShown && (
          <div className='flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'>
            <Input
              ref={todoInputRef}
              placeholder='To do'
              className='border-none'
              onChange={(e) => setLastTodo(e.currentTarget.value)}
              onKeyUp={(e) => {
                addTodo(e);
              }}
            />
          </div>
        )}

        <Button
          variant='ghost'
          className='flex justify-end text-sm font-medium text-[#94A3B8]'
          onClick={() => showEmptyTodo()}
        >
          + Aggiungi un task
        </Button>
      </div>

      {/* notes */}
      <div className='flex flex-col gap-2'>
        <Label htmlFor='notes'>Note sul viaggio</Label>

        <div id='notes' className='flex flex-col gap-2'>
          {notes.map((note, i) => (
            <div
              key={i}
              className='flex flex-col gap-4 rounded-md border border-[#DDDDDD] p-4'
            >
              <div className='flex flex-col'>
                <div className='flex w-full justify-end'>
                  <LuX
                    className='size-5 cursor-pointer text-[#94A3B8]'
                    onClick={() => {
                      removeNotes(i);
                    }}
                  />
                </div>

                <div className='flex items-center gap-2'>
                  <div className='flex size-8 items-center justify-center rounded-full bg-slate-300'>
                    U
                  </div>
                  User
                </div>
              </div>
              {note}
            </div>
          ))}
        </div>

        {/* write the note dialog */}
        <Dialog>
          <DialogTrigger className='mr-3 flex justify-end text-sm font-medium text-[#94A3B8]'>
            + Aggiungi una nota
          </DialogTrigger>
          <DialogContent className='max-w-[300px]'>
            <DialogTitle>Scrivi una nota sul viaggio</DialogTitle>
            <Textarea
              placeholder='Qualcosa sul tuo viaggio'
              onChange={(e) => setNewNote(e.currentTarget.value)}
            />
            <DialogDescription />
            <DialogClose asChild>
              <Button
                variant='outline'
                className='w-full border-black font-medium tracking-[0.5px]'
                type='submit'
                onClick={() => addNote(newNote)}
              >
                Continua
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
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
