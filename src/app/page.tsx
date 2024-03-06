import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
          id="settings"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Henrique" />
              </InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <InputRoot>
                  <InputControl id="lastName" defaultValue="Arantes" />
                </InputRoot>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              E-mail address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="henri.arantes1@gmail.com"
              />
            </InputRoot>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="role"
            >
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="Developer" />
            </InputRoot>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="country"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="bio"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Front End Developer based in Belo Horizonte, Brazil."
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="projects"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
