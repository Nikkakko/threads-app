'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Textarea } from '../ui/textarea';

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };

  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: '',
      name: '',
      username: '',
      bio: '',
    },
  });

  const onSubmit = (values: z.infer<typeof UserValidation>) => {
    console.log(values);
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col justify-start gap-10'
        >
          <FormField
            control={form.control}
            name='profile_photo'
            render={({ field }) => (
              <FormItem className='flex items-center gap-4'>
                <FormLabel className='account-form_image-label'>
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt='profile photo'
                      width={96}
                      height={96}
                      priority
                      className='rounded-full object-contain'
                    />
                  ) : (
                    <Image
                      src='/assets/profile.svg'
                      alt='profile photo'
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  )}
                </FormLabel>
                <FormControl className='flex-1 text-basse-semibold text-gray-200'>
                  <Input
                    type='file'
                    accept='image/*'
                    placeholder='Upload a photo'
                    className='account-form_image-input'
                    onChange={e => handleImage(e, field.onChange)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex flex-col  gap-3 w-full'>
                <FormLabel className='text-base-semibold text-light-2 '>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className='account-form_input no-focus'
                    type='text'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='flex flex-col  gap-3 w-full'>
                <FormLabel className='text-base-semibold text-light-2 '>
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className='account-form_input no-focus'
                    type='text'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem className='flex flex-col gap-3 w-full'>
                <FormLabel className='text-base-semibold text-light-2 '>
                  Bio
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    className='account-form_input no-focus resize-none'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className='bg-primary-500'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountProfile;
