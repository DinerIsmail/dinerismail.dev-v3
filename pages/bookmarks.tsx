import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'
import { Box, Link, VStack, Heading, HStack, Text } from '@chakra-ui/react'

import { BlogPost } from '@/types/blog-post'
import ScrollToTopButton from '@/components/scroll-to-top-button'

type Props = Omit<BlogPost, 'readingTime' | 'date'> & {
  source: MDXRemoteSerializeResult
}

const links = [
  {
    label: 'Consistency matters.',
    url: 'https://addyo.substack.com/p/consistency-matters',
    description: 'Article by Addy Osmani',
  },
  {
    label: 'How to Achieve More While Working Less',
    url: 'https://www.youtube.com/watch?v=OlPO8f-AAJk',
    description: 'Video by Ali Abdaal',
  },
]

const BookmarksPage = ({ title, description, source }: Props) => {
  return (
    <>
      <NextSeo
        title={`Bookmarks - Diner Ismail`}
        description={description}
        openGraph={{
          description,
          title: `Bookmarks - Diner Ismail`,
          url: `https://dinerismail.dev/about`,
        }}
      />
      <VStack position="relative" alignItems="stretch" w="full">
        <VStack alignItems="flex-start" spacing={3} mb="0.5rem">
          <Heading as="h1" size="lg">
            Bookmarks
          </Heading>
        </VStack>
        <Text fontSize="lg" mb="2rem">
          Links to articles, videos, and podcasts I value and want to revisit.
          You might find them helpful too.
        </Text>
        {links.map((link) => {
          return (
            <Link href={link.url}>
              <Box mb="1.25rem">
                <Heading as="h3" fontSize="xl">
                  {link.label}
                </Heading>
                <Text fontSize="1rem">{link.description}</Text>
              </Box>
            </Link>
          )
        })}
      </VStack>
      <ScrollToTopButton />
    </>
  )
}

export default BookmarksPage
