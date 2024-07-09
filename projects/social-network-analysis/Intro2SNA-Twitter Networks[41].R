
install.packages('twitteR', 'dplyr', 'ggplot2', 'lubridate', 'network', 'sna', 'igraph', 'network', 'qdap', 'tm')
install.packages("remotes")
remotes::install_github("analyxcompany/ForceAtlas2")
# Once installed, load the packages using the library() function:

library(igraph)
library(network)
library(sna)
library(dplyr)
library(utils)
library(ForceAtlas2)

"Step 2: Importing network data Next, you'll need to import your network data into R. 
The format of your data will depend on the specific network analysis you want to perform. 
For example, if you have an edge list (a list of connections between nodes), you can 
import it using the read.table() function:"

# Importing edge list
edge_list <- read_csv("Vaccine_edgelist_rtnet.csv")

edge_list <- Vaccine_edgelist_rtnet

# make sure there are no NAs in your edgelist
edge_list <- na.omit(edge_list)

# write_csv(edge_list, "~/Documents/Hertie/Freelance/Bertelsmann Stiftung/Knowledge Hub/Bertelsmann Knowledge Hub_SNA Tutorial_Darius/Vaccine_edgelist_rtnet.csv")

"If you have data in a different format, you may need to use a different function to import it.
Step 3: Creating a network object Once you have imported your network data, you need to create
a network object that R can work with. The specific function you use will depend on the
package you are using.
If you are using the igraph package, you can create a network object from the edge list using
the graph_from_data_frame() function:"


# Create an igraph network object
network_igraph <- graph_from_data_frame(d = edge_list, directed = TRUE)

# If you are using the network package, you can create a network object from the edge list using the network() function:

# Create a network object
rtnet <- network(edge_list, directed = TRUE, loops = TRUE, multiple = TRUE)


# Step 4: Basic network visualization To visualize the network, you can use the plot() function from the igraph package:

# Visualize the network
plot(rtnet, remove.multiple = F, remove.loops = T, edge.arrow.size=.4,vertex.label=NA, vertex.size2 = 0.1)

plot(network_igraph, remove.multiple = F, remove.loops = T, edge.arrow.size=.4,vertex.label=NA, vertex.size2 = 0.1)
  # this shows only a 'ball' if nodes but we can see already a clustered structure

# Large Graph Layout
layout_with_lgl(network_igraph)

# try ForceAtlas2 layout algorithm
# g <- graph.ring(50)
layout <- layout.forceatlas2(network_igraph, iterations=3000, plotstep=100)
plot(network_igraph, layout=layout)

# representing network graph layouts in a grounded manner that reflect network properties is an ongoing research field see Gaisbauer et al. (2023)

"This will generate a basic plot of the network.
Step 5: Analyzing network properties Now that you have your network object, you can analyze
various network properties. Here are a few examples:

Degree centrality: The degree centrality of a node is the number of connections it has.
You can calculate the degree centrality using the degree() function:"

# Network measures with Igraph (alternatively you can also calculate them with other network analysis packages for R like "network", here we are using IGraph)
# Calculate degree centrality
"The degree of a node/vertex equals the number of edges adjacent to it. In case of directed networks, we can also define in-degree (the number of edges pointing towards the vertex) and out-degree (the number of edges originating from the vertex)."

degree(network_igraph)


# Betweenness centrality: The betweenness centrality of a node measures the extent to which it lies on the shortest paths between other nodes. You can calculate the betweenness centrality using the betweenness() function:
edge_betweenness(network_igraph)


# the network package also allows for easy application of further centrality measures such as eigenvector centrality or closeness (see 6.7 Centrality& Centralization in https://kateto.net/netscix2016.html)



# Community detection: You can use various algorithms to detect communities within the network. One popular algorithm is the Louvain method, implemented in the cluster_louvain() function from the igraph package:

# Detect communities using Louvain method
communities <- cluster_louvain(network)
communities_fastandgreedy <- cluster_fast_greedy(network)
communities(network_igraph)

cluster_

"Step 6: Visualizing network properties To visualize network properties, you can use different plotting functions. Here are a few examples:"

# -- Visualizing degree centrality:
  # Plotting degree centrality
plot(degree_centrality)

# -- Visualizing betweenness centrality:
  # Plotting betweenness centrality
plot(betweenness_centrality)

# -- Visualizing communities:
  # Plotting communities
plot(communities, network)

"Step 7: Further analysis There are many more advanced techniques and analyses you can perform in social network analysis. -> recommend tutorials!"
