'use client'

import { useState, useMemo } from 'react'
import { Grid, Box, TextField, Pagination, Typography, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PostCard from './PostCard'

interface TagPostsListProps {
  posts: any[]
  postsPerPage?: number
}

export default function TagPostsList({ posts, postsPerPage = 8 }: TagPostsListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return posts

    const searchLower = searchTerm.toLowerCase()
    return posts.filter((post) => {
      const title = post.frontMatter?.title?.toLowerCase() || post.name.toLowerCase()
      const description = post.frontMatter?.description?.toLowerCase() || ''
      
      return title.includes(searchLower) || description.includes(searchLower)
    })
  }, [posts, searchTerm])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when search changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    // Scroll to top of posts section
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }

  return (
    <>
      {/* Search Field */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Buscar nesta tag..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 600 }}
        />
      </Box>

      {/* Results count */}
      {searchTerm && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {filteredPosts.length === 0 
              ? 'Nenhum post encontrado' 
              : `${filteredPosts.length} ${filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}`
            }
          </Typography>
        </Box>
      )}

      {/* Posts Grid */}
      {currentPosts.length > 0 ? (
        <Grid container spacing={4}>
          {currentPosts.map((post: any) => (
            <Grid key={post.route} size={{ xs: 12, md: 6 }}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Nenhum post encontrado com os termos de busca.
          </Typography>
        </Box>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination 
            count={totalPages} 
            page={currentPage} 
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </>
  )
}
