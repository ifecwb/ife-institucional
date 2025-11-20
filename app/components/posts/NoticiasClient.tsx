'use client'

import { useState } from 'react'
import { Container } from '@mui/material'
import PostsList from '../../components/posts/PostsList'
import SearchField from '../../components/posts/SearchField'

interface NoticiasClientProps {
  posts: any[]
  searchField: React.ReactNode
  tagsSection: React.ReactNode
}

export default function NoticiasClient({ posts, searchField, tagsSection }: NoticiasClientProps) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Container maxWidth="lg">
      <SearchField onSearchChange={setSearchTerm} />
      {tagsSection}
      <PostsList posts={posts} postsPerPage={8} searchTerm={searchTerm} />
    </Container>
  )
}
